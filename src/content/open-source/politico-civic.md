### Politico Civic

Politico Civic is a Django project that houses all of our election-centric data projects. Within Civic are multiple pluggable Django apps that work especially well in concert, but a few are useful as standalone Django apps as well.

#### [Entity](https://github.com/The-Politico/politico-civic-entity)

Entity houses models for people and organizations. For example, the Republican Party is an organization, and Mitt Romney is a person. Their roles as political parties and candidates will come in downstream apps, but Entity houses the base level information about them.

#### [Geography](https://github.com/The-Politico/politico-civic-geography)

Geography houses models for all of the geographic political divisions in the United States. It contains bootstrap scripts that get shapefiles from the Census Bureau for states, counties and congressional districts and load them into your database. It also creates a simplified geography for each of those objects.

#### [Demography](https://github.com/The-Politico/politico-civic-geography)

Demography collects and aggregates Census variables by the political divisions defined in Geography. 

#### [Government](https://github.com/The-Politico/politico-civic-government)

Government contains information about political jurisdictions, bodies, and offices. 