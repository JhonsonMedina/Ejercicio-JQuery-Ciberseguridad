  $(document).ready(function() {
  $(".informacion").hide();
 
 $("#ocultarProducto").click(function() {
    $(".informacion").fadeOut();
  });


  $("#mostrarProducto").click(function() {
    $(".informacion").fadeIn();
  });

   





  $(".box").hover(
    function() {
      $(this).addClass("hovered");
    },
    function() {
      $(this).removeClass("hovered");
    }
  );

 
 
 const imagenes = $(".box");
  let indice = 0;

  imagenes.hide();
  imagenes.eq(indice).show();

  $("#Siguiente").click(function () {
    imagenes.eq(indice).hide();
    indice = (indice + 1) % imagenes.length;
    imagenes.eq(indice).fadeIn();
  });

  $("#Anterior").click(function () {
    imagenes.eq(indice).hide();
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    imagenes.eq(indice).fadeIn();
  });

  });




//test de seeguridad

  $(document).ready(function() {
    // Mostrar modal de test al cargar (puedes cambiarlo a un botón si prefieres)
    var testModal = new bootstrap.Modal(document.getElementById('testSeguridad'));
    testModal.show();
    
    // Validación formulario de contacto
    $("#btnEnviar").click(function() {
        let valid = true;
        
        // Validar nombre
        if($("#nombre").val().trim() === "") {
            $("#errorNombre").text("Por favor ingresa tu nombre");
            valid = false;
        } else {
            $("#errorNombre").text("");
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test($("#email").val())) {
            $("#errorEmail").text("Ingresa un email válido");
            valid = false;
        } else {
            $("#errorEmail").text("");
        }
        
        // Validar consulta
        if($("#consulta").val().trim().length < 10) {
            $("#errorConsulta").text("Por favor describe mejor tu consulta (mínimo 10 caracteres)");
            valid = false;
        } else {
            $("#errorConsulta").text("");
        }
        
        if(valid) {
            alert("Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");
            $("#formularioContacto")[0].reset();
        }
    });
    
    // Validación test de seguridad
    $("#comprobarTest").click(function() {
        let score = 0;
        
        // Pregunta 1 (radio - solo una correcta)
        if($("input[name='pregunta1']:checked").val() === "b") {
            $("#feedback1").text("✅ Correcto!").addClass("correcta").removeClass("incorrecta");
            score++;
        } else {
            $("#feedback1").text("❌ Incorrecto. El phishing es un ataque para robar información confidencial.").addClass("incorrecta").removeClass("correcta");
        }
        
        // Pregunta 2 (checkbox - múltiples correctas)
        const respuestas2 = [];
        $("input[name='pregunta2']:checked").each(function() {
            respuestas2.push($(this).val());
        });
        
        if(respuestas2.length === 2 && respuestas2.includes("a") && respuestas2.includes("c")) {
            $("#feedback2").text("✅ Correcto! Las contraseñas seguras son largas y usan diversos caracteres.").addClass("correcta").removeClass("incorrecta");
            score++;
        } else {
            $("#feedback2").text("❌ Incorrecto. Revisa las opciones correctas.").addClass("incorrecta").removeClass("correcta");
        }
        
        // Mostrar resultado
        alert(`Test completado!\nPuntuación: ${score}/2\n${score >= 1 ? "Buen trabajo!" : "Puedes mejorar!"}`);
    });
});