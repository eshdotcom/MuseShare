// to generate unique random ID's for projects
import {v4 as uuid} from 'uuid';

// fake database for blog posts
const data = [
    {
        need: "Piano",
        projects: [
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                id: uuid(),
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            },
            {
                creator_name: "Esh Sathiyamoorthy",
                project_name: "Sunset",
                id: uuid(),
                description: "This song sucks rn, need some vocals",
                needs: ["Vocals from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "2",
                published: false
            },
            {
                creator_name: "Owen Johnson",
                project_name: "Sunrise",
                id: uuid(),
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "5",
                published: false
            }
        ]
    },
    {
        need: "Violin",
        projects: [
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                id: uuid(),
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            },
            {
                creator_name: "Esh Sathiyamoorthy",
                project_name: "Sunset",
                id: uuid(),
                description: "This song sucks rn, need some vocals",
                needs: ["Vocals from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "2",
                published: false
            },
            {
                creator_name: "Owen Johnson",
                project_name: "Sunrise",
                id: uuid(),
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "5",
                published: false
            }
        ]
    }    
]

// export syntax
export default data;