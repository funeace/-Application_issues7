# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on 'turbolinks:load', ->
  $("#user_postal_id").jpostal({
    postcode : ["#user_postal_id"],
    address : {
      "#user_prefecture" : "%3",
      "#user_city" : "%4%5"
    }
  })