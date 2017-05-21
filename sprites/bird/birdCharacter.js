
const birdCharacter = {
  name:"bird",
  size: {width: 220, height: 220},
  animationTypes: ['IDLE', 'WALK', 'EAT', 'CELEBRATE', 'DISGUST', 'ALL'],
  frames: [
    require('./bird_annoyed01.png'),
    require('./bird_annoyed02.png'),
    require('./bird_celebrate01.png'),
    require('./bird_celebrate02.png'),
    require('./bird_disgust01.png'),
    require('./bird_eat01.png'),
    require('./bird_eat02.png'),
    require('./bird_fly01.png'),
    require('./bird_fly02.png'),
    require('./bird_hungry01.png'),
    require('./bird_hungry02.png'),
    require('./bird_idle.png'),
    require('./bird_sleep01.png'),
    require('./bird_sleep02.png'),
  ],
  animationIndex: function getAnimationIndex (animationType) {
    switch (animationType) {
      case 'ANNOYED':
        return [0,1,1,0];
      case 'CELEBRATE':
        return [2,3,2,0,2,3,2,0];
      case 'DISGUST':
        return [0,4,4,4,4,0];
      case 'EAT':
        return [5,6,5,0];
      case 'FLY':
        return [0,7,8,7,8,0];
      case 'ALL':
        return [0,1,2,3,4,5,6,7,8];
    }
  },
};

export default birdCharacter;
