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
        const todoName = $('.name-form').val();
        const todoBody = $('.todo-form').val();
        console.log(todoName);
        if(todoName && todoBody){
        $.ajax({
          url: "/todos/" + todo,
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
    });