var app = angular.module('myApp',[]);
    app.controller('myCtrl',function($scope,$http){

        $scope.cart =[];
        $scope.myData=[];

        $http.get('data.json').then(function(response){
            $scope.myData = response.data;
            $scope.sortProduct();
        })
        $scope.addToCart = function(i){
            let found = false;
            if(!found){
                $scope.cart.push({...i,qty: 1})
            }
        
        }
        //login 
        $scope.btnLogin = function() {
        let uname = document.getElementById("unm").value;
        let pwn = document.getElementById("pwn").value;

        // Check if username or password are empty
        if (uname === "" || pwn === "") {
            alert("Please fill in both the username and password!");
        } else {
            // Check if credentials are correct
            if (uname === "admin" && pwn === "1234") {

                alert("Login Successfully...");
                window.location.href = "home.html"; // Redirect to home page
            } else {
                alert("Invalid username or password.");
            }
        }
    };

    //contact
    $scope.onc = function() {
        let nm = document.getElementById("nm").value;
        let enm = document.getElementById("enm").value;
        let msg = document.getElementById("msg").value;


        // Check if username or password are empty
        if (nm === "" || enm === "" || msg === "") {
            alert("Please fill in Details First!");
        } else {
            alert(" Data Submitted...");
            window.location.href = "home.html"; 
        }
    };


        $scope.total = 0;
        $scope.gTotal = function(i){
            return $scope.cart.reduce((total, i)=> (total+i.price * i.qty),0)
        }
        // sorting
        $scope.sortOrder = "";
        $scope.sortProduct = function(){
            if($scope.sortOrder === 'asc'){
                $scope.myData.sort((a,b) => a.price - b.price)
            }
            else if($scope.sortOrder === 'desc'){
                $scope.myData.sort((a,b) => b.price - a.price)
            }
        }
       
        //Increment
        $scope.inc = function(item){
            let found = $scope.cart.find(cartitem => cartitem.name == item.name);
            if(found){
                found.qty += 1;
            }else{
                $scope.cart.push({...i,qty:1});
            }
        }

        //Decrement
        $scope.dec = function(item){
            if(item.qty > 1){
                item.qty -= 1
            }else{
                $scope.cart = $scope.cart.filter(cartitem => cartitem.name !== item.name);
            }
        }
    });