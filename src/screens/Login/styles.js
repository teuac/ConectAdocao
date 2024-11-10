
import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Icon = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #fff;
  font-size: 16px;
  color: #333;
 
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #4CAF50;
  border-radius: 10px;
  align-items: center;
  margin-top: 10px;
 
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const SignUpText = styled.Text`
  color: #6c63ff;
  font-size: 16px;
  margin-top: 20px;
  text-decoration: underline;
`;