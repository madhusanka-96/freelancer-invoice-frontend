import API from "../services/api";

export default function Login() {
  const login = async () => {
    const res = await API.post("/auth/login", {
      email: "test@test.com",
      password: "123456",
    });
    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return <button onClick={login}>Login</button>;
}
