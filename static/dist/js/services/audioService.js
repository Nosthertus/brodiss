(function(angular){
	var app = angular.module("node-chat");

	app.service("audioService", [
		"ngAudio",
		function($audio){
			this.default = {
				source: {
					message: "dist/audio/message.wav"
				}
			};

			this.sounds = {};

			this.loadSounds = function(){
				var source = this.default.source;

				for(sound in source){
					this.sounds[sound] = $audio.load(source[sound]);
				}
			}
		}
	]);
})(angular);