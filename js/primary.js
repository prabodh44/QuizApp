$.ajax({
	url: 'quizQuestions.xml',
	dataType: 'xml',
	success: function(data)
	{
		console.log('data');
		$(data).find('questionList').each(function(){
				var question = $(this).find('question').text();
				

				$('.timeline ul').append(
					$('<li />' , {
						text: question
					}));
				// var option = $(this).find('options').text();

				// $('.timeline ul').append(
				// 	$('<li />', {
				// 		text: option
				// 	}));
				// 	}


		});
	},
	error: function()
	{
		alert("unsuccessful");
	}
});