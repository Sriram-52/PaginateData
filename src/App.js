import React from "react"
import { Provider } from "react-redux"
import store from "./store/Index"
import Table from "./components/Table"

function App(props) {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  )
}

export default App
