
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        with: "100%"
    }
})

// children props needs to show children of this component
export default function Layout({children}) {
    const classes = useStyles()
    return (
        <div>
            {/* app bar */}

            {/* side drawer */}

            <div className={classes.page}>
                {children}.
            </div>
        </div>
    )
}
