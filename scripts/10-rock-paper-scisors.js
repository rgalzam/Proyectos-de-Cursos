let score = JSON.parse(localStorage.getItem('score')) || 
        {Wins: 0,
        Loses: 0,
        Ties: 0,
      };

      updateScoreElement();

      /*if(!score){
        score = {
          Wins: 0,
          Loses: 0,
          Ties: 0,
        };
      }*/

      function playGame(playerMove){
        const computerMove = pickCPUMove();

        let result = '';

        if(playerMove==='scissors'){
          if(computerMove === 'rock'){
          result = 'You Lose.'
          } else if(computerMove=== 'paper'){
          result = 'You Win.';
          } else if(computerMove === 'scissors'){
          result = 'Tie.';
        }

        }else if(playerMove==='paper'){
          if(computerMove === 'rock'){
            result = 'You Win.'
          } else if(computerMove=== 'paper'){
            result = 'Tie.';
          } else if(computerMove === 'scissors'){
            result = 'You Lose.';
          }
          
        }else if(playerMove==='rock'){
          if(computerMove === 'rock'){
            result = 'Tie.'
          } else if(computerMove=== 'paper'){
            result = 'You Lose.';
          } else if(computerMove === 'scissors'){
            result = 'You Win.';
          }
        }

        if(result === 'You Win.'){
          score.Wins ++;
        } else if(result === 'Tie.'){
          score.Ties ++;
        } else if(result === 'You Lose.'){
          score.Loses ++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You:
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      Computer:
      <img src="images/${computerMove}-emoji.png" class="move-icon">`;

        /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`);*/
      }

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`

      }

      function pickCPUMove(){
        let computerMove = '';
        const randomNumber = Math.random();
        //console.log(randomNumber);

        if(randomNumber >= 0 && randomNumber < 1/3){
          computerMove = ('rock');
        } else if(randomNumber >= 1/3 && randomNumber < 2/3){
          computerMove = ('paper');

        }else if(randomNumber>=2/3 && randomNumber < 1){
          computerMove = ('scissors');
        }
        return computerMove;
        //console.log(computerMove);
      }