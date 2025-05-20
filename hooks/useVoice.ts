import Voice from '@react-native-voice/voice';
import { useEffect, useState } from 'react';

export default function useVoiceRecognition() {
  const [result, setResult] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  const onSpeechResult = (e: any) => {
    const text = e.value?.[0] ?? '';
    setResult(text);
  };

  const start = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (err: any) {
      console.error(err);
    }
  };
  const stop = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResult;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return {
    result,
    isListening,
    start,
    stop,
  };
}
