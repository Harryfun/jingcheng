 function list() {
     if ($("#list").css('display') == "none") {
         document.getElementById("list").style.display = "inline-block";
         document.getElementById("close").style.display = "none";
         $("#navlist").removeClass("navlist2");
         $("#navlist").addClass("navlist");
     } else {
         document.getElementById("list").style.display = "none";
         document.getElementById("close").style.display = "inline-block";
         $("#navlist").removeClass("navlist");
         $("#navlist").addClass('navlist2');
     }
 }