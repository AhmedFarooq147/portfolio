import { type SchemaTypeDefinition } from 'sanity'
import { Navbar } from './navSchema'
import { Projects } from './projectsSchema'
import { About } from './aboutSchema'
import { footer } from './footerSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Navbar,Projects,About,footer],
}
