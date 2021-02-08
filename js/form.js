$("#send__mail").on("click", function() {
	var name = $("#name").val().trim();
	var tel = $("#tel").val().trim();
	var email = $("#email").val().trim();

	if(name == "") {
		$("#error").text("Введите имя!");
		return false;
	} else if(tel == "") {
		$("#error").text("Введите телефон!");
		return false;
	} else if(email == "") {
		$("#error").text("Введите Email!");
		return false;
	}

	$("#error").text("");

	$.ajax({
		// url: '../ajax/mail.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'tel': tel, 'email': email },
		dataType: 'html',
		beforeSend: function() {
			$("#send__mail").prop("disabled", true);
		},
		success: function(data) {
			// if(data === false)
			// 	alert("Ошибка, сообщение не отправлено!");
			// else 
				$("#form").trigger("reset");

			$("#send__mail").prop("disabled", false);
			$(".popup").removeClass('active');
		}

	});
});