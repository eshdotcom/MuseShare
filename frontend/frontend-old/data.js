// to generate unique random ID's for projects (if needed)
const { v4: uuid } = require('uuid');

// fake database for blog posts
const projectData = [
    {
        need_category_name: "Piano",
        projects: [
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 123,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            },
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 456,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            },
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 789,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            }
        ]
    },
    {
        need_category_name: "Violin",
        projects: [
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 123,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            },
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 456,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            },
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 789,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            }
        ]
    },
    {
        need_category_name: "Vocal",
        projects: [
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 123,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            },
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 456,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            },
            {
                creator_name: "Arjun Srivastava",
                project_name: "Moonrise",
                project_id: 789,
                description: "Made this song last year, here's the first minute of it",
                needs: ["Piano riff from 00:26 to 00:38", "Experienced pianist"],
                tags: ["piano riff", "guitar", "Seattle"],
                num_requests: "3",
                published: false
            }
        ]
    }
]

// export syntax
module.exports.projectData = projectData;