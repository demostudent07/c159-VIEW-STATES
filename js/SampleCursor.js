AFRAME.registerComponent("cursor-listener", {
     schema: {
       selectedItemId: { default: "", type: "string" },
     },
     
     init: function () {
       
     },

     handlePlacesListState: function () {
       const id = this.el.getAttribute("id");
       const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
      
     },
     
     
   });
   