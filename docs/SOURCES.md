# Source Registry Notes

The application keeps source metadata in `src/lib/sources/registry.ts` and indexed passages in `src/lib/corpus/`.

For each source, keep the following information current:

- title
- author / publisher when applicable
- original URL
- citation location
- status in the approved registry
- excerpt type (for example, literal passage vs curated summary)

## Public-repository review

Before publishing a new corpus item, the team should verify that the material can be redistributed in the intended repository and deployment context.

Do not upload complete books, private documents, unpublished material, API credentials, or other restricted content.

The public project should distinguish clearly between:

- **literal**: text presented as a direct excerpt
- **curated-summary**: a research-oriented summary linked to a source location

This distinction is part of the product's provenance model.
