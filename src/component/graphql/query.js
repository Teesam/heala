import { useQuery, gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
    query {
        launches {
        mission_name
        mission_id
        rocket {
            rocket_name
            rocket {
            company
            name
            mass {
                kg
            }
            }
        }
        launch_site {
            site_name
        }
        launch_date_local
        }
}
`