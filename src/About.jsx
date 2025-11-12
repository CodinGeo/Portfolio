import './About.css'

import heroPic from '/assets/heroPic.png'
import reactLogo from '/assets/reactLogo.svg'
import wpLogo from '/assets/wpLogo.svg'
import ghLogo from '/assets/ghLogo.svg'
import securityIcon from '/assets/securityIcon.svg'
import cleanIcon from '/assets/cleanIcon.svg'
import performanceIcon from '/assets/performanceIcon.svg'

function About(){
  return(
    <div className='about subpage'>
        <div className='aboutFirstBox aboutBox'>
            <div className='aboutIntroContainer'>
                <div className='aboutHero'>
                    <img className='aboutHeroPic' src={heroPic}/>
                    <h3 className='aboutHeroName'>Marcin Bieliński</h3>
                </div>
                <p className='aboutDesc'>
                    I'm a freshly baked front-end developer from Poland. In the last few years I've been developing multiple websites for my highschool and personal projects.
                    During that period I've been also gaining knowledge in algorithms and data structeres preparing for Polish Olympiad of Informatics, in which I managed to advance to semi-finals.
                    In my free time I like to go to outdoor hikes, especially to the mountains.
                </p>
            </div>
            <div>
                <h3 className='aboutLangTitle aboutTitle'>
                    Languages
                </h3>
                <div className='aboutLangContent aboutSectionContent'>
                    <p className='aboutLangItem'>Polish - Native</p>
                    <p className='aboutLangItem'> English - C1</p>
                </div>
            </div>
        </div>
        <div className='aboutSecondBox aboutBox'>
            <div className='aboutStackSection'>
                <h3 className='aboutTitle'>
                    Tech I use
                </h3>
                <div className='aboutStackContent aboutSectionContent'>
                    <img className='aboutStackItem' src={reactLogo}></img>
                    <img className='aboutStackItem' src={wpLogo} license='https://www.gnu.org/licenses/gpl-3.0.html'></img>
                    <img className='aboutStackItem' src={ghLogo}></img>

                </div>
            </div>
            <div className='aboutNumbersSection'>
                <h3 className='aboutTitle'>
                    Career in numbers
                </h3>
                <div className='aboutNumbersContent aboutSectionContent'>
                    <div className='aboutNumbersItem boutNumbersItem1'>
                        <h4 className='aboutNumbersItemNumber'>6</h4>
                        <p className='aboutNumbersItemDesc'>Projects finished</p>
                    </div>
                    <div className='aboutNumbersItem aboutNumbersItem2'>
                        <h4 className='aboutNumbersItemNumber'>2</h4>
                        <p className='aboutNumbersItemDesc'>Projects in progress</p>
                    </div>
                    <div className='aboutNumbersItem aboutNumbersItem3'>
                        <h4 className='aboutNumbersItemNumber'>4</h4>
                        <p className='aboutNumbersItemDesc'>Hackathons attended</p>
                    </div>
                    <div className='aboutNumbersItem aboutNumbersItem4'>
                        <h4 className='aboutNumbersItemNumber'>~6000</h4>
                        <p className='aboutNumbersItemDesc'>Lines of code</p>
                    </div>
                    <div className='aboutNumbersItem aboutNumbersItem5'>
                        <h4 className='aboutNumbersItemNumber'>36</h4>
                        <p className='aboutNumbersItemDesc'>Stack Overflow saves</p>
                    </div>
                    <div className='aboutNumbersItem aboutNumbersItem6'>
                        <h4 className='aboutNumbersItemNumber'>many</h4>
                        <p className='aboutNumbersItemDesc'>Cups of coffee</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='aboutThirdBox aboutBox'>
            <div className='aboutValuesSection'>
                <h3 className='aboutTitle'>
                    My coding goals
                </h3>
                <div className='aboutValuesContent aboutSectionContent'>
                    <div className='aboutValuesItem'>
                        <img src={securityIcon} className='aboutValuesIcon' license='https://www.svgrepo.com/page/licensing/#CC%20Attribution'/>
                        <h4 className='aboutValuesText'>Security</h4>
                    </div>
                    <div className='aboutValuesItem'>
                        <img src={cleanIcon} className='aboutValuesIcon'/>
                        <h4 className='aboutValuesText'>Cleanliness</h4>
                    </div>
                    <div className='aboutValuesItem'>
                        <img src={performanceIcon} className='aboutValuesIcon'/>
                        <h4 className='aboutValuesText'>Performance</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About