console.log("Hey custom js is loaded");
console.log("page loaded");
let action;
$("button").on("click", event => {
  let eventTarget = event.target.id;

  if (eventTarget === "new-todo") {
    console.log("yes");
    action = event.target.attributes["data-action"].value;
    $("#exampleModal").modal("show");
    console.log(action);
  } else if (eventTarget === "update-todo") {
    action = event.target.attributes["data-action"].value;
    $("#exampleModal").modal("show");
    console.log("yes");
    console.log(action);
  }

  // Create todo
  if (eventTarget === "submit-todo") {
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
