import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import{Link,Redirect,useHistory} from "react-router-dom"
import api from "../../services/api"
import{ toast } from 'react-toastify'
import Container, { Select } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button';

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    phone: yup.string().matches(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/, "Apenas números entre 0 e 9 são válidos").required("Campo obrigatório").min(8),
    cep: yup.string().matches(/^\d{5}-\d{3}$/, "Insira seu CEP com o formato válido, ex.: 00000-111").required("Campo Obrigatório"),
    password: yup.string().matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Sua senha deve conter ao menos 8 caracteres, uma letra maíuscula, uma letra minúscula, um número e um caracter especial."
  ).required("Campo obrigatório").min(8),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem coincidir')
    .required('Campo obrigatório'),
    typeUser: yup.string().required("Campo obrigatório")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  })
  const history = useHistory()

  const handleSubmitFunction = (data) => {
    api.post("/users/", data)
    .then((res) => {
      const {accessToken} = res.data
      localStorage.setItem("@capstore:accessToken", JSON.stringify(accessToken))
      return history.push('/login')
    })
    .catch((err) => toast.error("Erro ao criar usuario"))
    console.log("done")
  }

  const token = localStorage.getItem("@capstore:accessToken") || false;
  if(token) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSubmitFunction)}>
        <h1>Criar Conta</h1>
        <Input label="Nome" type="text" register={register} name="name" error={errors.name?.message} />
        <Input label="Email" type="text" register={register} name="email" error={errors.email?.message} />
        <Input label="Telefone" type="text" register={register} name="phone" error={errors.phone?.message} placeholder="51 9999-9999" />
        <Input label="CEP" type="text" register={register} name="cep" error={errors.cep?.message} placeholder="00000-000"/>
        <Input label="Senha" type="password" register={register} name="password" error={errors.password?.message} />
        <Input label="Confirme sua Senha" type="password" register={register} name="confirmPassword" error={errors.confirmPassword?.message} />
        <Select {...register("typeUser")}>
        <option value="seller">Vendedor</option>
        <option value="customer">Cliente</option>
        </Select>
        <Button type="submit">Confirmar</Button>
      </form>
    </Container>
  )
}

export default Register