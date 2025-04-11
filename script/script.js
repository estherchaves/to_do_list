function addTask() {
    let mensagem = "Task added succesfully!";
          document.getElementById("mensagem").textContent = mensagem;

          let inputTarefa = document.getElementById("inputTarefa")
          let tarefa = inputTarefa.value

          inputTarefa.value=""


          console.log(tarefa)
  }