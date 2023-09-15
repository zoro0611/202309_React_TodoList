import Header from "@/components/Header"
import Footer from "@/components/Footer"
import App from "@/components/MainContent"
import Store from "@/data/store"
import { Provider } from "react-redux"


export default function Home() {
  return (
    <Provider store={Store}>
      {/* <Header /> */}
      <App />
      {/* <Footer /> */}
    </Provider>
  )
}
