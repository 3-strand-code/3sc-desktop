import React from 'react'

// open all markdown links in a new window, for now
// TODO: find cross platform way to run the `open` command so we launch their native web browser
const Link = (props) => <a {...props} target='_blank' />

export default Link
