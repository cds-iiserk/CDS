# HELPER FUNCTIONS

there is [pub.txt](./pub.txt) file where you can store the publication data. <-- You can automate this step too (not done yet).

The format in [pub.txt](./pub.txt) file is 
```
YEAR

NAME OF PUBLICATION
AUTHOR - AUTHORS NAMES SEPARATED BY COMMA (,)
LINK - URL(S) TO THE PUBLICATION

```

After storing data in [pub.txt](./pub.txt), run the codes in [helper.ipynb](./helper.ipynb) to update the [publications.json](./publications.json). 

The structure of [publications.json](./publications.json) file is -

```json
{
    YEAR : {
        NAME OF PUBLICATION : {
            "author" : [LIST OF AUTHORS],
            "link" : [LIST OF LINKS]
        }
    }
}

```

The [publications page](../../publication.html) will be automatically updated when you reload the page. 