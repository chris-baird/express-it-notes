console.log('Hey custom js is loaded');
console.log('page loaded');
    $("button").on("click", event => {
      console.log('clicked');
      let eventTarget = event.target.id;

      if(eventTarget === "submit") {
        const todoName = $('.name-form').val();
        const todoBody = $('.todo-form').val();
        $.ajax({
          url: '/todos/',
          type: 'POST',
          data: {
            name: todoName,
            todo: todoBody
          },
          success: function(result) {
            window.location.reload();
            $('.name-form').val('');
            $('.todo-form').val('');
          }
        })
      }

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

      if (eventTarget === "update") {
        $('#exampleModal').modal('show');
        const todo = event.target.attributes["data-todo"].value;
        const todoName = $('.name-form').val();
        const todoBody = $('.todo-form').val();
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