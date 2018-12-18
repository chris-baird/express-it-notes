let action;
let modalInfo = {
  modalTitle: $('.modal-title'),
  modalNameInput: $('.name-form'),
  modalTodoInput: $('.todo-form'),
  modalSubmit: $('#submit-todo'),
  modalTodoId:''
}

$("button").on("click", event => {
  let eventTarget = event.target.id;
  let eventAction;
  if (eventTarget === "new-todo" || eventTarget === "update-todo") {
    action = event.target.attributes["data-action"].value;
    if (action === "add-todo") {
      eventAction = event.target.attributes[4].value;
      console.log(eventAction);
      modalInfo.modalTitle.text('Add New Todo');
      modalInfo.modalNameInput.val('');
      modalInfo.modalTodoInput.val('');
      modalInfo.modalSubmit.text('Add Todo');
      modalInfo.modalSubmit.attr('data-action', 'new');
      $("#exampleModal").modal("show");
    } else if (action === "update-todo") {
      console.log(event.target.attributes[1].value);
      modalInfo.modalTodoId = event.target.attributes[1].value
      console.log(modalInfo.modalTodoId);
      eventAction = event.target.attributes[2].value;
      console.log(eventAction);
      modalInfo.modalTitle.text('Update Todo');
      let todoName = event.target.attributes[3].value;
      let todoBody = event.target.attributes[4].value;
      modalInfo.modalNameInput.val(todoName);
      modalInfo.modalTodoInput.val(todoBody);
      modalInfo.modalSubmit.text('Update Todo');
      modalInfo.modalSubmit.attr('data-action', 'update');
      $("#exampleModal").modal("show");
    }
  }

  if($(`#${eventTarget}`).attr('data-action') === 'new'){
    console.log('new hit');
    const todoName = $(".name-form").val();
    const todoBody = $(".todo-form").val();
    $.ajax({
      url: "/todos/",
      type: "POST",
      data: {
        name: todoName,
        todo: todoBody
      },
      success: function(result) {
        window.location.reload();
        $(".name-form").val("");
        $(".todo-form").val("");
      }
    });
  } else if($(`#${eventTarget}`).attr('data-action') === 'update'){
    console.log('update hit');
    // const todo = event.target.attributes["data-todo"].value;
    console.log(event.target.attributes);
    const todoName = $(".name-form").val();
    const todoBody = $(".todo-form").val();
    if (todoName && todoBody) {
      $.ajax({
        url: "/todos/" + modalInfo.modalTodoId,
        type: "PUT",
        data: {
          name: todoName,
          todo: todoBody
        },
        success: function(result) {
          window.location.reload();
        }
      });
    }
  }

  // if (eventTarget === "new-todo") {
  //   console.log("yes");
  //   action = event.target.attributes["data-action"].value;
  //   $("#exampleModal").modal("show");
  //   console.log(action);
  // } else if (eventTarget === "update-todo") {
  //   action = event.target.attributes["data-action"].value;
  //   $("#exampleModal").modal("show");
  //   console.log("yes");
  //   console.log(action);
  // }

  // Create todo
  // if (eventTarget === "submit-todo") {
  //   const todoName = $(".name-form").val();
  //   const todoBody = $(".todo-form").val();
  //   $.ajax({
  //     url: "/todos/",
  //     type: "POST",
  //     data: {
  //       name: todoName,
  //       todo: todoBody
  //     },
  //     success: function(result) {
  //       window.location.reload();
  //       $(".name-form").val("");
  //       $(".todo-form").val("");
  //     }
  //   });
  // }

  // Delete todo
  if (eventTarget === "delete") {
    const todo = event.target.attributes["data-todo"].value;
    $.ajax({
      url: "/todos/" + todo,
      type: "DELETE",
      success: function(result) {
        window.location.reload();
      }
    });
  }

  // Update todo
  // if (eventTarget === "update-todo") {
  //   $("#exampleModal").modal("show");
  //   const todo = event.target.attributes["data-todo"].value;
  //   const todoName = $(".name-form").val();
  //   const todoBody = $(".todo-form").val();
  //   if (todoName && todoBody) {
  //     $.ajax({
  //       url: "/todos/" + todo,
  //       type: "PUT",
  //       data: {
  //         name: todoName,
  //         todo: todoBody
  //       },
  //       success: function(result) {
  //         window.location.reload();
  //       }
  //     });
  //   }
  // }
});
