var picture1Id , picture2Id , picture3Id
let count1=0, count2=0, count3=0, count4=0,count5=0,count6=0;count7=0, count8=0,count9=0
function picture1(id){ 
    document.getElementById('second-image').style.display='none';
        document.getElementById('third-image').style.display='none';
    document.getElementById('first-image').style.display='block';
    document.querySelector('.container-4').style.display ='none';
    document.querySelector('.container-5').style.display ='none';
    document.querySelector('.container-6').style.display ='none';
    document.querySelector('.container-7').style.display ='none';
    document.querySelector('.container-8').style.display ='none';
    document.querySelector('.container-9').style.display ='none';
     document.querySelector('.container-11').style.display ='none';
     document.querySelector('.container-12').style.display ='none';
     document.querySelector('.container-14').style.display ='none';
     document.querySelector('.container-15').style.display ='none';
    uncheckAll()
    
    console.log("ID of picture 1",id)
    picture1Id = id
    return picture1Id;
    }
function picture2(id){
    document.getElementById('first-image').style.display='none';
    document.getElementById('third-image').style.display='none';
    document.getElementById('second-image').style.display='block';
     document.querySelector('.container-1').style.display ='none';
     document.querySelector('.container-2').style.display ='none';
     document.querySelector('.container-3').style.display ='none';
     document.querySelector('.container-7').style.display ='none';
    document.querySelector('.container-8').style.display ='none';
    document.querySelector('.container-9').style.display ='none';
     document.querySelector('.container-10').style.display ='none';
     document.querySelector('.container-12').style.display ='none';
     document.querySelector('.container-13').style.display ='none';
     document.querySelector('.container-15').style.display ='none';
    uncheckAll()
    console.log("ID of picture 2:",id)
   picture1Id = id
   return picture1Id


}
    function picture3(id){
        document.getElementById('first-image').style.display='none';
        document.getElementById('second-image').style.display='none';
        document.getElementById('third-image').style.display='block';
        document.querySelector('.container-1').style.display ='none';
     document.querySelector('.container-2').style.display ='none';
     document.querySelector('.container-3').style.display ='none';
     document.querySelector('.container-4').style.display ='none';
     document.querySelector('.container-5').style.display ='none';
     document.querySelector('.container-6').style.display ='none';
      document.querySelector('.container-10').style.display ='none';
     document.querySelector('.container-11').style.display ='none';
     document.querySelector('.container-13').style.display ='none';
     document.querySelector('.container-14').style.display ='none';

     uncheckAll()
     picture1Id = id
    return picture1Id
    }
    
  
    function pictureChange()
    {
  
    if(picture1Id ==='btn-1'){
      if(count1 !== 0){
        document.querySelector('.container-1').innerHTML ='';
      document.querySelector('.container-2').innerHTML ='';
      document.querySelector('.container-3').innerHTML ='';
      //.innerHTML
      }
      count1++;
    
      document.querySelector('.container-1').style.display ='block';
      document.querySelector('.container-2').style.display ='block';
      document.querySelector('.container-3').style.display ='block';
     

const image1 = document.createElement('img')
image1.src  = 'https://memestatic.fjcdn.com/pictures/2+good+bois_657822_7700921.jpg'
image1.height =400
image1.width = 500
image1.style = "padding-left:65%"
document.querySelector('.container-1').appendChild(image1)

const image2 = document.createElement('img')
image2.src ='https://memestatic.fjcdn.com/pictures/2+good+bois_657822_7700921.jpg'
image2.height =500
image2.width = 250
image2.style ="padding-left:35%"
document.querySelector('.container-2').appendChild(image2)


const image3 = document.createElement('img')
image3.src ='https://memestatic.fjcdn.com/pictures/2+good+bois_657822_7700921.jpg'
image3.height =250
image3.width = 600
image3.style ="padding-left:35%"
document.querySelector('.container-3').appendChild(image3)

      

  }else if(picture1Id === 'btn-2'){
    if(count2 !== 0){
      document.querySelector('.container-4').innerHTML ='';
    document.querySelector('.container-5').innerHTML ='';
    document.querySelector('.container-6').innerHTML ='';
    //.innerHTML
    }
    count2++;
    document.querySelector('.container-4').style.display ='block';
    document.querySelector('.container-5').style.display ='block';
    document.querySelector('.container-6').style.display ='block';
    const image1 = document.createElement('img')
    image1.src  = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvKlFi23Pp3MWvamAnjSHvzbwJFzunO0u0jQ&usqp=CAU'
    image1.height =400
    image1.width = 500
    image1.style = "padding-left:35%"
    document.querySelector('.container-4').appendChild(image1)
    
    const image2 = document.createElement('img')
    image2.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvKlFi23Pp3MWvamAnjSHvzbwJFzunO0u0jQ&usqp=CAU'
    image2.height =500
    image2.width = 250
    image2.style ="padding-left:35%"
    document.querySelector('.container-5').appendChild(image2)
    
    const image3 = document.createElement('img')
    image3.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvKlFi23Pp3MWvamAnjSHvzbwJFzunO0u0jQ&usqp=CAU'
    image3.height =250
    image3.width = 600
    image3.style ="padding-left:35%"
    document.querySelector('.container-6').appendChild(image3)
   
    //picture2Id = null;
    
      }
      // else if(picture1Id === 'btn-3'){
        else{
          if(count3 !== 0){
            document.querySelector('.container-7').innerHTML ='';
          document.querySelector('.container-8').innerHTML ='';
          document.querySelector('.container-9').innerHTML ='';
          //.innerHTML
          }
          count3++;
        document.querySelector('.container-7').style.display ='block';
      document.querySelector('.container-8').style.display ='block';
      document.querySelector('.container-9').style.display ='block';
        const image1 = document.createElement('img')
        image1.src  = 'https://cuongphim.com/wp-content/uploads/2020/04/Lion-King-2-cuong-phim.jpg'
        image1.height =400
        image1.width = 500
        image1.style = "padding-left:35%"
        document.querySelector('.container-7').appendChild(image1)
        
        const image2 = document.createElement('img')
        image2.src ='https://cuongphim.com/wp-content/uploads/2020/04/Lion-King-2-cuong-phim.jpg'
        image2.height =500
        image2.width = 250
        image2.style ="padding-left:35%"
        document.querySelector('.container-8').appendChild(image2)
        
        const image3 = document.createElement('img')
        image3.src ='https://cuongphim.com/wp-content/uploads/2020/04/Lion-King-2-cuong-phim.jpg'
        image3.height =250
        image3.width = 600
        image3.style ="padding-left:35%"
        document.querySelector('.container-9').appendChild(image3)
        //picture3Id = null
      }
}

function selectConversion(){
  document.querySelector('.select').style.display ='block';
  document.querySelector('.container-1').innerHTML ='';
  document.querySelector('.container-2').innerHTML ='';
  document.querySelector('.container-3').innerHTML ='';
  document.querySelector('.container-4').innerHTML ='';
  document.querySelector('.container-5').innerHTML ='';
  document.querySelector('.container-6').innerHTML ='';
  document.querySelector('.container-7').innerHTML ='';
  document.querySelector('.container-8').innerHTML ='';
  document.querySelector('.container-9').innerHTML ='';

}
//for image 1
document.getElementById('check1').addEventListener('click', function (e) {
  if (e.target.type === 'checkbox') {
    if(picture1Id ==='btn-1'){
      if(count4 !== 0){
        document.querySelector('.container-10').innerHTML ='';
      }
      count4++;
   
   // document.querySelector('.container-10').innerHTML ='';
   document.querySelector('.container-10').style.display ='block';
    const image1 = document.createElement('img')
image1.src  = 'https://memestatic.fjcdn.com/pictures/2+good+bois_657822_7700921.jpg'
image1.height =500
image1.width = 700
image1.style = "padding-left:35%; padding:top:10%"
document.querySelector('.container-10').appendChild(image1)
  }
else if (picture1Id ==='btn-2'){
  if(count5 !== 0){
    document.querySelector('.container-11').innerHTML ='';
  }
  count5++;

//document.querySelector('.container-11').innerHTML ='';
document.querySelector('.container-11').style.display ='block';
const image1 = document.createElement('img')
image1.src  = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvKlFi23Pp3MWvamAnjSHvzbwJFzunO0u0jQ&usqp=CAU'
image1.height =500
image1.width = 700
image1.style = "padding-left:35%"
document.querySelector('.container-11').appendChild(image1)
}
else{
  if(count6 !== 0){
    document.querySelector('.container-12').innerHTML ='';
  }
  count6++;

//document.querySelector('.container-12').innerHTML ='';
document.querySelector('.container-12').style.display ='block';
const image1 = document.createElement('img')
image1.src  = 'https://cuongphim.com/wp-content/uploads/2020/04/Lion-King-2-cuong-phim.jpg'
image1.height =500
image1.width = 700
image1.style = "padding-left:35%"
document.querySelector('.container-12').appendChild(image1)
}
}
});

document.getElementById('check2').addEventListener('click', function (e) {
  if (e.target.type === 'checkbox') {
    if(picture1Id ==='btn-1'){
      
      if(count7 !== 0){
        document.querySelector('.container-13').innerHTML ='';
      }
      count7++;
   
   // document.querySelector('.container-13').innerHTML ='';
   document.querySelector('.container-13').style.display ='block';
    const image1 = document.createElement('img')
image1.src  = 'https://memestatic.fjcdn.com/pictures/2+good+bois_657822_7700921.jpg'
image1.height =400
image1.width = 300
image1.style = "padding-left:35%"
document.querySelector('.container-13').appendChild(image1)
  }
  else if (picture1Id ==='btn-2'){
    if(count8 !== 0){
      document.querySelector('.container-14').innerHTML ='';
    }
    count8++;
  
  //document.querySelector('.container-14').innerHTML ='';
  document.querySelector('.container-14').style.display ='block';
  const image1 = document.createElement('img')
  image1.src  = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvKlFi23Pp3MWvamAnjSHvzbwJFzunO0u0jQ&usqp=CAU'
  image1.height =400
  image1.width = 300
  image1.style = "padding-left:35%"
  document.querySelector('.container-14').appendChild(image1)
  }
  else{
    if(count9 !== 0){
      document.querySelector('.container-15').innerHTML ='';
    }
    count9++;
  
  //document.querySelector('.container-15').innerHTML ='';
  document.querySelector('.container-15').style.display ='block';
  const image1 = document.createElement('img')
  image1.src  = 'https://cuongphim.com/wp-content/uploads/2020/04/Lion-King-2-cuong-phim.jpg'
  image1.height =400
  image1.width = 300
  image1.style = "padding-left:35%"
  document.querySelector('.container-15').appendChild(image1)
  }
    
  }
});

// togle function
function myFunction() {
  var x = document.getElementById("check");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

 //create uncheckall function 
 function uncheckAll() { 
  var inputs = document.querySelectorAll('.uncheck'); 
  for (var i = 0; i < inputs.length; i++) { 
      inputs[i].checked = false; 
  } 
} 

window.onload = function() { 
  window.addEventListener('load', checkAll, false); 
} 

