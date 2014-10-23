;(function(){
    'use strict';

      var Slushy  = require('./Slushy.js');
      var util    = require('util');


      var Slush_y = module.exports =  function Slush_y (){

        Slushy.apply( this, arguments );
      };

      util.inherits( Slush_y, Slushy );

      /**
       * Siphon, the primary endpoint name when siphoning a gulp task;
       * @param  {Object} __Generator  [Callback Function to call, pasing (this) context in, and passing the options object]
       * @param  {Object}   options    [Options are passed between the promise chain to keep thing on the same page.]
       * @return {[type]}              [description]
       */
      Slush_y.prototype.siphon = function(__Generator, options){

        var __this = this;

        return function (done){

            return __this.run(options)
              .then( __this.use( __this.defaults, options ))
              .then( __this.use( __this.prompts , options ))
              .then( __this.use( __this.config  , options ))
              .then( __this.use( __this.source  , options ))
              .then( __this.use( __Generator    , options ))
              .catch( done )
          }
      }

      /**
       * Used as a middleware helper for the .then() promises, inorder to pass params in. Also allows us to call it with a specific context
       *
       * @param  {Function}  callback [the callback function from the promise. ]
       * @param  {Object}    options  [options is an empty object at first, and begins to grow as the it is passed around]
       * @return {Promise}            [Return a promise to pick up on the next chain]
       */
      Slush_y.prototype.use          = function ( callback, options ) {

        return callback.apply( this, arguments );
      }

      /*
       * Initialize the promise chain and pass in the initial options
       */
      Slush_y.prototype.flow         = function ( options ) {

        return options;
      }

      /**
       * [defaults Check if the generator is running default, if so, initialize configuration after prompt]
       * @param  {Object}   options   [options object, this object is modified every step until the end.]
       * @return {Promise}            [returns a promise to pick up on the next chain]
       */
      Slush_y.prototype.defaults      = function ( options ) {

        return options;
      }

      /**
       * [prompts prompt th user using inquire]
       * @param  {Object}   options   [options should contain a property {prompts} a list of prompts to pass into inquire]
       * @return {Promise}            [Return a promise for the next chain]
       */
      Slush_y.prototype.prompts       = function ( options ) {

        return options;
      }
      /**
       * [Configuration Initialize the config store if this is a new instance, otherwise, ignore and pass throguh]
       * @param  {Object}   options   [options should now contain a property call {answers} a list of all the users choices]
       * @return {Promise}            [return a promise for the next chain]
       */
      Slush_y.prototype.configuration = function ( options ) {

        return options;
      }

      /**
       * [source this will create ans add all source and destinatino path selectios for the generator to do it's job.]
       * @param  {Object}   options   [Options should contain the same informatino as before, as we did not modify it in configuration]
       * @return {Promise}            [Return a promise for the next chain]
       */
      Slush_y.prototype.source        = function ( options ) {

        return options;
      }

      Slush_y.prototype.registration = function ( ) {

        return this.register;
      }

}).call(this);