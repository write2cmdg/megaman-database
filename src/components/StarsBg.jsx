import { useEffect } from 'react';

function StarsBg() {
  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    window.addEventListener("resize", resizeCanvas);

    const stars = [];

    function Star(x, y, size, speed) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speed = speed;

      this.update = function() {
        this.x -= this.speed;
        if (this.x < -this.size) {
          this.x = window.innerWidth + this.size;
          this.y = Math.random() * window.innerHeight;
        }
      }

      this.draw = function() {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function createStars() {
      stars.length = 0;
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 2;
        const speed = (Math.random() + 0.1) * 2;
        stars.push(new Star(x, y, size, speed));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
      }

      requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    }
  }, []);

  return (
    <div
      className="absolute inset-0 z-[-20]"
      style={{ background: '#081849', width: '100vw', height: '100vh' }}
    >
      <canvas id="myCanvas"></canvas>

      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="star absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white"
          style={{
            animation: `scroll ${(Math.random() + 1) * 100}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`
          }}
        hidden ></div>
      ))}
    </div>
  );
}

export default StarsBg;
