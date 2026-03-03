# Contributing to the Retool Custom Component Gallery

Thanks for building something awesome! Here's how to get your component added to the gallery.

## Requirements

Before submitting, make sure your component meets these standards:

- **Username** — must be your real Retool Community Forum handle
- **Project name** — must clearly describe what the component does
- **About** — 2-3 sentences max, explains the value of the component
- **How it works** — clear technical explanation a developer can follow
- **Build process** — enough detail for someone to recreate or extend it
- **PR link** — must be a valid GitHub pull request to this repo

Components that are vague, incomplete, or missing required fields will be flagged for revision.

## Folder structure

Each component lives in its own folder inside `components/`:

```
components/
└── your-component-name/
    ├── README.md       ← required: metadata and documentation
    ├── index.js        ← required: the component code
    └── preview.png     ← required: screenshot or preview image
```

Copy `components/_template/` to get started.

## Submission steps

1. Fork this repo
2. Create a branch: `git checkout -b add/your-component-name`
3. Copy the template: `cp -r components/_template components/your-component-name`
4. Fill out all fields in `README.md`
5. Add your component code to `index.js`
6. Add a `preview.png` screenshot
7. Commit and push your branch
8. Open a Pull Request — the PR template will guide you

## Review process

Once you open a PR:
- You will receive a confirmation email
- Our review agent checks every submission against the quality criteria
- If accepted your PR will be merged and your component goes live
- If changes are needed you will receive an email with specific feedback and an edit link

## Code of conduct

Be respectful, be helpful, build great things.
