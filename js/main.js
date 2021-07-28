

function myFunction() {
    myVar = setTimeout(showPage, 1500);

}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

 $(document).ready(function main(){



            $("#mission").ready(function(){
                 var date1 = new Date("9/29/2017");
                 var date2 = new Date();
                 var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                 var diffMonths = Math.ceil(timeDiff / (1000 * 3600 * 24 * 30));
                 console.log(diffMonths);
                 document.getElementById("start2").innerHTML = diffMonths;
                 document.getElementById("mission").innerHTML = '1';
            });

            $("#time").ready(function set_time(){
                 var now = new Date();
                now = now.toLocaleString();
                console.log(now);
                document.getElementById("time").innerHTML = now;
            });

           $("#motivation").ready(function set_motivation(){
                function doScaledTimeout(i) {
                      setTimeout(function() {
                        document.getElementById("motivation").innerHTML = (i);
                      }, i * 50);
                    }
                for (var i = 1; i <= 100; ++i)
                  doScaledTimeout(i);
           });

           $("#start").ready(function set_start(){
                function doScaledTimeout(i) {
                      setTimeout(function() {
                        document.getElementById("start").innerHTML = (i);
                      }, i * 350);
                    }
                 var date1 = new Date("9/29/2017");
                 var date2 = new Date();
                 var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                 var diffMonths = Math.ceil(timeDiff / (1000 * 3600 * 24 * 30));
                 for (var i = 0; i <= diffMonths; ++i)
                  doScaledTimeout(i);
           });
 });