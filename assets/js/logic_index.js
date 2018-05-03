$(document).ready(function () {
	$(".trivia-eye").hide()
	$(".lyme-eye").hide()
	$(".rpg-eye").hide()
	$(".rps-eye").hide()
	$(".hangman-eye").hide()
	$(".gif-eye").hide()


	$(".lyme-project").hover(function() {
		$('.lyme-eye').show()
		$('.lyme-text').hide()
		$('.lyme-img').hide()
		$('.lyme-title').hide()
		$('.lyme-footer').hide()
		$('.github-link-img').show()
	},
	function() {
		$('.lyme-eye').hide()
		$('.lyme-text').show()
		$('.lyme-title').show()
		$('.lyme-img').show()
		$('.lyme-footer').show()
	})

	$(".trivia-project").hover(function() {
		$('.trivia-eye').show()
		$('.trivia-text').hide()
		$('.trivia-img').hide()
		$('.trivia-title').hide()
		$('.trivia-footer').hide()
	},
	function() {
		$('.trivia-eye').hide()
		$('.trivia-text').show()
		$('.trivia-title').show()
		$('.trivia-img').show()
		$('.trivia-footer').show()
	})

	$(".rpg-project").hover(function() {
		$('.rpg-eye').show()
		$('.rpg-text').hide()
		$('.rpg-img').hide()
		$('.rpg-title').hide()
		$('.rpg-footer').hide()
	},
	function() {
		$('.rpg-eye').hide()
		$('.rpg-text').show()
		$('.rpg-title').show()
		$('.rpg-img').show()
		$('.rpg-footer').show()
	})

	$(".rps-project").hover(function() {
		$('.rps-eye').show()
		$('.rps-text').hide()
		$('.rps-img').hide()
		$('.rps-title').hide()
		$('.rps-footer').hide()
	},
	function() {
		$('.rps-eye').hide()
		$('.rps-text').show()
		$('.rps-title').show()
		$('.rps-img').show()
		$('.rps-footer').show()
	})

	$(".hangman-project").hover(function() {
		$('.hangman-eye').show()
		$('.hangman-text').hide()
		$('.hangman-img').hide()
		$('.hangman-title').hide()
		$('.hangman-footer').hide()
	},
	function() {
		$('.hangman-eye').hide()
		$('.hangman-text').show()
		$('.hangman-title').show()
		$('.hangman-img').show()
		$('.hangman-footer').show()
	})

	$(".gif-project").hover(function() {
		$('.gif-eye').show()
		$('.gif-text').hide()
		$('.gif-img').hide()
		$('.gif-title').hide()
		$('.gif-footer').hide()
	},
	function() {
		$('.gif-eye').hide()
		$('.gif-text').show()
		$('.gif-title').show()
		$('.gif-img').show()
		$('.gif-footer').show()
	})

	$(".lyme-project").on("click", function() {
		window.location.href="https://lyme-love-your-movie-experience.github.io/LYME/index.html"
	})

	$(".trivia-project").on("click", function() {
		window.location.href="https://kilcannon.github.io/TriviaGame/"
	})

	$(".rps-project").on("click", function() {
		window.location.href="https://kilcannon.github.io/RPS-Multiplayer/"
	})

	$(".rpg-project").on("click", function() {
		window.location.href="https://kilcannon.github.io/week-4-game/"
	})

	$(".hangman-project").on("click", function() {
		window.location.href="https://github.com/kilcannon/liri-node-app"
	})

	$(".gif-project").on("click", function() {
		window.location.href="https://kilcannon.github.io/Giftastic/"
	})
});