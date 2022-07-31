import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"
import { CourseEntityType } from "../../../../Domain/Entities/CourseEntity"

const CourseListItem = (props : CourseListItemProps) => {
    return <Grid item>
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    { props.course.name }
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    { props.course.term }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    Edit
                </Button>
                <Button size="small">
                    Assignments
                </Button>
            </CardActions>
        </Card>
    </Grid>
}

interface CourseListItemProps {
    course : CourseEntityType
}

export default CourseListItem