/**
 * Ambient Romantic Audio Synthesizer & Audio Controller
 * Uses Web Audio API to create gentle, emotional, resonant acoustic piano/chime
 * harmonies if no MP3 file is loaded, and handles external audio files seamlessly.
 */

class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isSynthesizing: boolean = false;
  private timer: number | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private masterGain: GainNode | null = null;
  private listeners: Set<(isPlaying: boolean, currentTime: number, duration: number) => void> = new Set();
  public isPlaying: boolean = false;
  public currentTime: number = 0;
  public duration: number = 261;
  private externalUrl: string = '/audio/perfect.mp3';

  constructor() {
    // Initialized on first user interaction
  }

  public subscribe(fn: (isPlaying: boolean, currentTime: number, duration: number) => void) {
    this.listeners.add(fn);
    // Initial call
    fn(this.isPlaying, this.currentTime, this.duration);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying, this.currentTime, this.duration));
  }

  public init(customUrl?: string) {
    if (customUrl) {
      this.externalUrl = customUrl;
    }
  }

  private ensureAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft, warm harmonic note (acoustic-like chime/rhodes tone)
  private playNote(freq: number, startTime: number, duration: number, gainAmount: number = 0.15) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, startTime);
    filter.frequency.exponentialRampToValueAtTime(300, startTime + duration);

    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(gainAmount, startTime + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  // Gentle, nostalgic romantic chord progression of "Perfect" by Ed Sheeran (Key of G Major, 6/8 slow dance ballad)
  private playChordProgression() {
    if (!this.ctx) return;
    
    const chords = [
      {
        bass: 196.00,
        notes: [196.00, 246.94, 293.66, 392.00],
        leadMelody: [392.00, 440.00, 392.00, 329.63]
      },
      {
        bass: 164.81,
        notes: [164.81, 196.00, 246.94, 329.63],
        leadMelody: [329.63, 369.99, 392.00, 293.66]
      },
      {
        bass: 130.81,
        notes: [261.63, 329.63, 392.00, 523.25],
        leadMelody: [293.66, 329.63, 392.00, 440.00]
      },
      {
        bass: 146.83,
        notes: [220.00, 293.66, 369.99, 440.00],
        leadMelody: [369.99, 329.63, 293.66, 392.00]
      },
    ];

    let chordIndex = 0;
    const chordDuration = 4.2;

    const scheduleChords = () => {
      if (!this.isSynthesizing || !this.ctx) return;
      const t = this.ctx.currentTime;
      const current = chords[chordIndex % chords.length];

      this.playNote(current.bass, t, 3.8, 0.12);

      current.notes.forEach((freq, i) => {
        this.playNote(freq, t + i * 0.28, 3.0, 0.07);
      });

      current.leadMelody.forEach((mFreq, mi) => {
        this.playNote(mFreq, t + 1.2 + mi * 0.65, 1.8, 0.05);
      });

      chordIndex++;
      this.timer = window.setTimeout(scheduleChords, chordDuration * 1000);
    };

    scheduleChords();
  }

  public async togglePlay(customUrl?: string): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      return await this.play(customUrl);
    }
  }

  public async play(customUrl?: string): Promise<boolean> {
    const url = customUrl || this.externalUrl || '/audio/perfect.mp3';

    if (url) {
      try {
        if (!this.audioElement) {
          this.audioElement = new Audio(url);
          this.audioElement.loop = true;
          this.audioElement.preload = 'auto';

          this.audioElement.onloadedmetadata = () => {
            if (this.audioElement && this.audioElement.duration) {
              this.duration = this.audioElement.duration;
              this.notify();
            }
          };

          this.audioElement.ontimeupdate = () => {
            if (this.audioElement) {
              this.currentTime = this.audioElement.currentTime;
              if (this.audioElement.duration) {
                this.duration = this.audioElement.duration;
              }
              this.notify();
            }
          };

          this.audioElement.onended = () => {
            this.isPlaying = false;
            this.notify();
          };
        } else if (this.audioElement.src !== url && !this.audioElement.src.endsWith(url)) {
          this.audioElement.src = url;
          this.audioElement.load();
        }

        await this.audioElement.play();
        this.isPlaying = true;
        this.isSynthesizing = false;
        this.notify();
        return true;
      } catch (err) {
        console.warn("External audio playback error, using romantic synth fallback:", err);
      }
    }

    // Fallback: Built-in romantic acoustic synthesizer
    try {
      this.ensureAudioContext();
      this.isSynthesizing = true;
      this.isPlaying = true;
      this.playChordProgression();
      this.notify();
      return true;
    } catch (e) {
      console.error("Audio synth error:", e);
      return false;
    }
  }

  public pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isSynthesizing = false;
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
    this.isPlaying = false;
    this.notify();
  }

  public seek(seconds: number) {
    if (this.audioElement && !isNaN(seconds)) {
      this.audioElement.currentTime = Math.max(0, Math.min(seconds, this.duration));
      this.currentTime = this.audioElement.currentTime;
      this.notify();
    }
  }

  public setVolume(val: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, val)), this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.volume = Math.max(0, Math.min(1, val));
    }
  }
}

export const romanticAudio = new RomanticAudioEngine();
