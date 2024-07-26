# node-test-only-false

tests output `'only' and 'runOnly' require the --test-only command-line option.` even if only is false.

1. clone repo
2. run `npm t`

expected:

no `'only' and 'runOnly' require the --test-only command-line option.` shown since none of the tests have `only` set to true.
