from fastapi import FastAPI, Body, Path, Query, HTTPException
from fastapi.responses import HTMLResponse,JSONResponse
from pydantic import BaseModel,Field
from typing import Optional, List
from jwt_manager import create_token

app = FastAPI()

class User(BaseModel):
    email:str
    password:str

class Movie(BaseModel):
    id: Optional[int] = None
    title: str = Field(min_length=5 ,max_length=50)
    overview: str = Field(min_length=10 ,max_length=50)
    year: int = Field(le=2022)
    raiting: float =  Field(ge=1, le=10)
    category: str = Field(min_length=5 ,max_length=15) 
    
    class Config:
     schema_extra ={
            "example": {
                "id": 1,
                "title": "Movie",
                "overview": "Description the movie",
                "year": 2022,
                "raiting": 9.8,
                "category": "Action" 
            }
        }
movies = [
    {
		"id": 1,
		"title": "Avatar",
		"overview": "En un exuberante planeta llamado Pandora viven los Na'vi, seres que ...",
		"year": "2009",
		"rating": 7.8,
		"category": "Action"
	},
    {
		"id": 2,
		"title": "Avatar",
		"overview": "En un exuberante planeta llamado Pandora viven los Na'vi, seres que ...",
		"year": "2009",
		"rating": 7.8,
		"category": "Action"
	}
]


#return message 
@app.get('/', tags=['home'])
def message():
    return JSONResponse(content={'Hello':'world'})

#create user
@app.get('/login', tags=['auth'])
def login(user:User):
    if user.email == 'admin@gmail.com' and user.password == 'admin':
        token:str = create_token(user.dict())
        return {"token": token}
    else:
        raise HTTPException(status_code=401, detail="Unauthorized") 

#get movie
@app.get('/movies/', tags=['movies'],status_code=200)
def get_movies() -> List[Movie]:
    return movies
#[movie.dict() for movie in movies]

#filter by id
@app.get('/movies/{id}',tags=['movies_id'], response_model=Movie)
def get_movies_id(id:int = Path(ge=1, le=2000)) -> Movie:
    for i in movies:
        if i['id'] == id:
            return i
    raise HTTPException(status_code=404, detail="Movie not found")
    
#filter by category  
@app.get('/movies', tags=['movies'], response_model=List[Movie])
def get_movie_by_category(category:str = Query(min_length=5, max_length=15))-> List[Movie]:
    data = [i for i in movies if i['category'] == category]
    return data  

#create  movies
@app.post('/movies', tags=['movies'], response_model=dict,status_code=201)
def create_movie(movie:Movie) -> dict:
    movies.append(movie)
    return {'Message':'Register succesfully'}

#update movie
@app.put('/movies/{id}',tags=['movies_id'],response_model=dict,status_code=200)
def update_movie(id:int, movie:Movie) -> dict:
    for i in movies:
       if i['id'] == id:
           i['title'] = movie.title
           i['overview'] = movie.overview
           i['year'] = movie.year
           i['raiting'] = movie.raiting
           i['category'] = movie.category
           return JSONResponse(content={'Message':'Update succesfully'})
    raise HTTPException(status_code=404, detail="Movie not found")
           
@app.delete('/movies/{id}',tags=['movies_id'], response_model=dict,status_code=200)
def delete_movie(id:int) -> dict:
    for i in movies:
        if i ['id'] == id:
            movies.remove(i)
            return JSONResponse(content={'Message':'Remove succesfully'})

            