<template>
  <div class="lds-pacman"><div><div></div><div></div><div></div></div><div><div></div><div></div></div></div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

@keyframes lds-pacman-1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@-webkit-keyframes lds-pacman-1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes lds-pacman-2 {
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(225deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
@-webkit-keyframes lds-pacman-2 {
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(225deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
@keyframes lds-pacman-3 {
  0% {
    transform: translate(190px, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(70px, 0);
    opacity: 1;
  }
}
@-webkit-keyframes lds-pacman-3 {
  0% {
    transform: translate(190px, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(70px, 0);
    opacity: 1;
  }
}
.lds-pacman {
  display: inline-block;
  position: relative;
}
.lds-pacman > div:nth-child(2) div {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 60px;
  border-radius: 120px 120px 0 0;
  background: $c-brand-yellow;
  animation: lds-pacman-1 0.8s linear infinite;
  transform-origin: 60px 60px;
}
.lds-pacman > div:nth-child(2) div:nth-child(2) {
  animation: lds-pacman-2 0.8s linear infinite;
}
.lds-pacman > div:nth-child(1) div {
  position: absolute;
  top: 92px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: $c-brand-red;
  animation: lds-pacman-3 0.8s linear infinite;
}
.lds-pacman > div:nth-child(1) div:nth-child(1) {
  animation-delay: -0.536s;
}
.lds-pacman > div:nth-child(1) div:nth-child(2) {
  animation-delay: -0.264s;
}
.lds-pacman > div:nth-child(1) div:nth-child(3) {
  animation-delay: 0s;
}
.lds-pacman {
  width: 100px !important;
  height: 100px !important;
  transform: translate(-50px, -50px) scale(0.5) translate(50px, 50px);
}
</style>
