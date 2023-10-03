import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Text} from '@rneui/base';
import React from 'react';
import {AuthHeader, Headers} from '../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import {TextInput} from 'react-native-gesture-handler';
import {showToastError} from '../../../utils';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {AuthActions, SendOTPPayload, getAuthUserProfile} from '../../../redux';

const SendOTP: React.FC = () => {
  const styles = useStyles();

  const [pin1, setPin1] = React.useState('');
  const [pin2, setPin2] = React.useState('');
  const [pin3, setPin3] = React.useState('');
  const [pin4, setPin4] = React.useState('');

  const [payload, setPayload] = React.useState<SendOTPPayload>({
    email: '',
    otp: '',
  });

  const dispatch = useAppDispatch();

  const {email} = useAppSelector(getAuthUserProfile);
  console.log(email);
  React.useEffect(() => {
    setPayload({
      email: email || '',
      otp: pin1 + pin2 + pin3 + pin4,
    });
  }, [pin1, pin2, pin3, pin4]);
  console.log(payload);
  const pin1Ref = React.useRef<TextInput | null>(null);
  const pin2Ref = React.useRef<TextInput | null>(null);
  const pin3Ref = React.useRef<TextInput | null>(null);
  const pin4Ref = React.useRef<TextInput | null>(null);

  const [countdown, setCountdown] = React.useState<number>(60);
  const [isCounting, setIsCounting] = React.useState<boolean>(false);

  const [textColor, setTextColor] = React.useState(styles.textinitial.color);
  const [resendText, setResendText] = React.useState<string>('Send code');

  const validateOTP = () => {
    if (pin1 === '' || pin2 === '' || pin3 === '' || pin4 === '') {
      showToastError('Error, OTP must not be left blank');
    } else {
      dispatch(AuthActions.handleVerifyOTP(payload));
    }
  };

  React.useEffect(() => {
    let id: NodeJS.Timeout | null = null;
    if (isCounting && countdown > 0) {
      id = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setIsCounting(false);
      if (id) {
        clearInterval(id);
      }
      setResendText('Send code');
      setTextColor(styles.textinitial.color);
    }

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isCounting, countdown]);

  const startCountdown = () => {
    setIsCounting(true);
    setCountdown(60);
    setResendText('Resend code in ');
  };

  const handlePin1Change = (text: string) => {
    if (parseInt(text)) {
      setPin1(text);
      if (text != null) {
        pin2Ref.current?.focus();
      }
    } else if (text.length === 0) {
      setPin1(text);
      pin1Ref.current?.focus();
    }
  };

  const handlePin2Change = (text: string) => {
    if (parseInt(text)) {
      setPin2(text);
      if (text != null) {
        pin3Ref.current?.focus();
      }
    } else if (text.length === 0) {
      setPin2(text);
      pin1Ref.current?.focus();
    }
  };

  const handlePin3Change = (text: string) => {
    if (parseInt(text)) {
      setPin3(text);
      if (text != null) {
        pin4Ref.current?.focus();
      }
    } else if (text.length === 0) {
      setPin3(text);
      pin2Ref.current?.focus();
    }
  };

  const handlePin4Change = (text: string) => {
    if (parseInt(text)) {
      setPin4(text);
      if (text != null) {
        pin4Ref.current?.focus();
      }
    } else if (text.length === 0) {
      setPin4(text);
      pin3Ref.current?.focus();
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <Headers
            leftIcon={true}
            onPressLeftIcon={() =>
              NavigationService.navigate(routes.FORGOT_PASSWORD)
            }
          />
          <AuthHeader
            title="OTP Verification"
            subTitle="We have sent the OTP verification code to your email address. Check your email and enter the code below."
          />
          <View style={styles.viewCenter}>
            <View style={styles.viewRow}>
              <TextInput
                style={styles.textOTP}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={handlePin1Change}
                value={pin1}
                ref={pin1Ref}
              />
              <TextInput
                style={styles.textOTP}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={handlePin2Change}
                value={pin2}
                ref={pin2Ref}
              />
              <TextInput
                style={styles.textOTP}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={handlePin3Change}
                value={pin3}
                ref={pin3Ref}
              />
              <TextInput
                style={styles.textOTP}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={handlePin4Change}
                value={pin4}
                ref={pin4Ref}
              />
            </View>
            <Text style={styles.text3}>Didn’t receive email?</Text>
            <TouchableOpacity
              style={styles.viewCenter}
              onPress={() => {
                if (isCounting) {
                  // Đang đếm ngược, không làm gì cả
                } else {
                  // Bắt đầu một bộ đếm ngược mới
                  startCountdown();
                  setTextColor(styles.text6.color);
                }
              }}>
              <Text style={[styles.textCT, {color: textColor}]}>
                {resendText}
                {isCounting && countdown > 0 ? (
                  <>
                    <Text style={styles.text5}>{`${countdown} `}</Text>
                    <Text style={styles.text4}>s</Text>
                  </>
                ) : null}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity style={styles.btnContinue} onPress={validateOTP}>
              <Text style={styles.textContinue}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SendOTP;
