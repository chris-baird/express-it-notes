console.log('Hey custom js is loaded');
console.log('page loaded');
    $("button").on("click", event => {
      let todo = event.target.attributes["data-todo"].value;
      let eventTarget = event.target.id;
      if (eventTarget === "delete") {
        $.ajax({
          url: "/todos/" + todo,
          type: "DELETE",
          success: function(result) {
            window.location.reload();
          }
        });
      }
      if (eventTarget === "update") {
        console.log('update hit');
        let updateTodo = prompt('Update Todo');
        console.log(updateTodo);
        if(updateTodo){
        $.ajax({
          url: "/todos/" + todo,
          type: "PUT",
          data: {
            data: updateTodo
          },
          success: function(result) {
            window.location.reload();
          }
        });
      }
      }
    });