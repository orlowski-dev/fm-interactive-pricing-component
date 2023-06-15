import './Footer.css';

export default function Footer() {
    return <footer>
        <div className="attribution">
			Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
			Coded by <a href="https://www.frontendmentor.io/profile/orlowski-dev">@orlowski-dev</a>.
  		</div>
        <div className="created-with">
            <p>
                Created with
                <img src="/images/heart-svgrepo-com.svg" alt="heart icon" />
                +
                <img src="/images/vite.svg" alt="vite logo" />
                +
                <img src="/images/react.svg" alt="react logo" />
            </p>
        </div>
    </footer>
}