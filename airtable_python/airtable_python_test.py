# handy website for learning about this stuff:
# https://towardsdatascience.com/downloading-airtable-data-into-python-89e5c7107a24

# library used to get stuff from airtable
import requests
import pandas

# construct a url for the airtable we're using
base_id = ""
table_name = "Table Name"
url = "https://api.airtable.com/v0/" + base_id + "/" + table_name

# to point to a specific record in the table
# url += "/" + record_id

params = {}
headers = {}

# get the stuff from airtable
# Note: this is limited to 100 records, so we have to do fancy stuff if we want more
response = requests.get(url, params=params, headers=headers)

# convert response from JSON to nested dictionary
airtable_response = response.json()

# make this into pandas df
airtable_rows = []
for record in airtable_response['records']:
    airtable_rows.append(record['fields'])

pd.DataFrame(airtable_rows)
airtable_rows.head()