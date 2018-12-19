(() => {
  let action;
  let modalInfo = {
    modalTitle: $(".modal-title"),
    modalNameInput: $(".name-form"),
    modalTodoInput: $(".todo-form"),
    modalSubmit: $("#submit-todo"),
    modalTodoId: ""
  };

  $("button").on("click", event => {
    let eventTarget = event.target.id;
    let eventAction;
    if (eventTarget === "new-todo" || eventTarget === "update-todo") {
      action = event.target.attributes["data-action"].value;
      if (action === "add-todo") {
        eventAction = event.target.attributes[4].value;
        modalInfo.modalTitle.text("Add New Todo");
        modalInfo.modalNameInput.val("");
        modalInfo.modalTodoInput.val("");
        modalInfo.modalSubmit.text("Add Todo");
        modalInfo.modalSubmit.attr("data-action", "new");
        $("#exampleModal").modal("show");
      } else if (action === "update-todo") {
        modalInfo.modalTodoId = event.target.attributes[1].value;
        eventAction = event.target.attributes[2].value;
        modalInfo.modalTitle.text("Update Todo");
        let todoName = event.target.attributes[3].value;
        let todoBody = event.target.attributes[4].value;
        modalInfo.modalNameInput.val(todoName);
        modalInfo.modalTodoInput.val(todoBody);
        modalInfo.modalSubmit.text("Update Todo");
        modalInfo.modalSubmit.attr("data-action", "update");
        $("#exampleModal").modal("show");
      }
    }

    if ($(`#${eventTarget}`).attr("data-action") === "new") {
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
    } else if ($(`#${eventTarget}`).attr("data-action") === "update") {
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
  });
})();
