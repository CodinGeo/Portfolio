import './Projects.css'

import loPage from '/assets/17loPage.mp4';
import spPage from '/assets/sp37Page.mp4';
import zsoPage from '/assets/zso8Page.mp4';
import loPagePoster from '/assets/17loPagePoster.webp';
import spPagePoster from '/assets/sp37PagePoster.webp';
import zsoPagePoster from '/assets/zso8PagePoster.webp';

function Projects(){
  const ProjectItem = (props)=>{
    return(
      <div className={'projectsListItem ' + (props.size === 'large' ? 'projectsListItemLarge' : 'projectsListItemSmall')}>
        <video className='projectsListItemVid' src={props.src} poster={props.poster} type='video/mp4' autoPlay='autoplay' muted loop/>
        <h3 className={'projectsListItemTitle ' + (props.size === 'large' ? 'projectsListItemTitleLarge' : 'projectsListItemTitleSmall')}>{props.title}</h3>
      </div>
    );
  }
  return(
    <div className='projects subpage'>
      <h2 className='projectsTitle'>My projects</h2>
      <div className='projectsList'>
        <div className='projectsListLeft'>
          <a className='projectsListLink' href='http://17logdynia.pl/' target='_blank'>
            <ProjectItem title='17 LO Gdynia' size='large' src={loPage} poster={loPagePoster}/>
          </a>
        </div>
        <div className='projectsListRight'>
          <a className='projectsListLink' href='http://sp37gdynia.pl/' target='_blank'>
            <ProjectItem title='SP 37 Gdynia' size='small' src={spPage} poster={spPagePoster}/>
          </a>
          <a className='projectsListLink' href='http://zso8gdynia.pl/' target='_blank'>
            <ProjectItem title='ZSO 8 Gdynia' size='small' src={zsoPage} poster={zsoPagePoster}/>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Projects