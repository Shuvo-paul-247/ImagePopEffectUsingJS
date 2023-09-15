
let fullPage = document.getElementById('fullPage');
let center = document.getElementById('center');
    
    // Throttling Function
    const throttleFunction=(func, delay)=>{
     
      // Previously called time of the function
      let prev = 0;
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();
     
        // Logging the difference between previously
        // called and current called timings
        console.log(now-prev, delay);
         
        // If difference is greater than delay call
        // the function again.
        if(now - prev> delay){
          prev = now;
     
          // "..." is the spread operator here
          // returning the function with the
          // array of arguments
          return func(...args); 
        }
      }
    }

    center.addEventListener("mousemove", throttleFunction((dets)=>{

      let imgDiv = document.createElement("div");
      imgDiv.classList.add("img_div");
      imgDiv.style.left = dets.clientX + "px";
      imgDiv.style.top = dets.clientY + "px";

      fullPage.appendChild(imgDiv);

      setTimeout(() => {
        imgDiv.remove()
      }, 1500);

      let myImg = document.createElement("img");
      myImg.setAttribute("src","https://images.unsplash.com/photo-1693922874427-fe02b8961458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
      myImg.classList.add("myImg");
      imgDiv.appendChild(myImg);

      gsap.to(myImg, {
        y: "0",
        ease: "power1",
        duration: 0.6,
        rotationY: 10,
        z: -100
      })
      gsap.to(myImg, {
        y: "300",
        ease: "power2",
        duration: 0.6,
        delay: 0.7
      })

    }, 350));