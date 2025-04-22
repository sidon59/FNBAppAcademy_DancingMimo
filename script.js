 // Set up countdown
 const countdownEl = document.getElementById('countdown');
 let count = 3;
 
 const countdownInterval = setInterval(() => {
   count--;
   countdownEl.textContent = count;
   
   if (count <= 0) {
     clearInterval(countdownInterval);
     countdownEl.textContent = "Let's GO!";
     setTimeout(() => {
       countdownEl.style.display = 'none';
     }, 1000);
   }
 }, 1000);
 
 // Create emoji rain
 const emojiRain = document.getElementById('emojiRain');
 const emojis = ['💻', '🚀', '🔥', '✨', '🎉', '📱', '💎', '👩‍💻', '🎯', '💯'];
 const emojiCount = 30;
 
 for (let i = 0; i < emojiCount; i++) {
   const emoji = document.createElement('div');
   emoji.className = 'emoji';
   
   // Random properties
   const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
   const posX = Math.random() * 100;
   const delay = Math.random() * 5;
   const duration = Math.random() * 3 + 2;
   
   // Set content and styles
   emoji.textContent = randomEmoji;
   emoji.style.left = `${posX}%`;
   emoji.style.animationDuration = `${duration}s`;
   emoji.style.animationDelay = `${delay}s`;
   
   emojiRain.appendChild(emoji);
 }
 
 // Create coding elements background
 const codingElements = document.getElementById('codingElements');
 const codeSnippets = [
   '{ code }', '< app />', 'function()', 'FNB.js', 'while(true)',
   'if(coding)', '#challenge', 'class App', 'import React', '.then()',
   'async', 'await', '</html>', '$scope', '==>', '[array]'
 ];
 
 for (let i = 0; i < 25; i++) {
   const codeEl = document.createElement('div');
   codeEl.className = 'code-element';
   
   // Random properties
   const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
   const posX = Math.random() * 100;
   const posY = Math.random() * 100;
   const rotation = Math.random() * 360;
   const size = Math.random() * 20 + 14;
   
   // Set content and styles
   codeEl.textContent = snippet;
   codeEl.style.left = `${posX}%`;
   codeEl.style.top = `${posY}%`;
   codeEl.style.transform = `rotate(${rotation}deg)`;
   codeEl.style.fontSize = `${size}px`;
   
   codingElements.appendChild(codeEl);
 }
 
 // Heart button animation
 const heartBtn = document.getElementById('heartBtn');
 let likes = 0;
 
 heartBtn.addEventListener('click', () => {
   likes++;
   heartBtn.textContent = `❤️ ${likes}`;
   
   // Create flying heart effect
   const heart = document.createElement('div');
   heart.textContent = '❤️';
   heart.style.position = 'absolute';
   heart.style.left = `${Math.random() * 20 + 10}%`;
   heart.style.bottom = '10%';
   heart.style.fontSize = '24px';
   heart.style.opacity = '1';
   heart.style.zIndex = '10';
   heart.style.pointerEvents = 'none';
   heart.style.transition = 'all 1s ease-out';
   
   document.body.appendChild(heart);
   
   setTimeout(() => {
     heart.style.transform = 'translateY(-100px)';
     heart.style.opacity = '0';
   }, 50);
   
   setTimeout(() => {
     heart.remove();
   }, 1000);
 });