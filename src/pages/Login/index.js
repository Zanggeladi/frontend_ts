import './index.scss'
import {Card, Form, Input, Button, message} from 'antd'
import logo from '@/assets/logo1.png'
import {useDispatch} from "react-redux";
import {fetchLogin} from "@/store/modules/user";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = (values) =>{
        console.log(values)
        //触发异步action fetchLogin
        dispatch(fetchLogin(values)).then(() =>{
            console.log('尝试跳转')
            //1.跳转到首页
            navigate('/')
            //2.提示登录成功
            message.success('登录成功')
        })

        // console.log('尝试跳转')
        // //1.跳转到首页
        // navigate('/')
        // //2.提示登录成功
        // message.success('登录成功')
    }
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form validateTrigger={['onBlur']} onFinish={onFinish}>
                    <Form.Item
                        name="mobile"
                        rules={[
                            {
                                required: true,
                                message: '手机号不能为空!',
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '手机号码格式错误!'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: '验证码不能为空!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login