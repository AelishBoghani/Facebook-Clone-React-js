import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="wigets">
             <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F106461617679070%2Fposts%2F217688723223025%2F&width=500&show_text=true&height=311&appId"
        
        width="340"
        height="100%"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
             {/* <iframe
       src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F106461617679070%2Fposts%2F220545309604033%2F&width=500&show_text=true&height=311&appId"
        width="340"
        height="100%"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
       */}
        </div>
    )
}

export default Widgets
