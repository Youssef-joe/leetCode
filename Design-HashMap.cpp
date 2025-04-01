class MyHashMap {
    private: 
     static const int SIZE = 1000;
     vector<list<pair<int, int>>> table;
     int hashFunction(int key) {
        return key % SIZE;
     };
public:
    MyHashMap(): table(SIZE) {
        
    }
    
    void put(int key, int value) {
        int index = hashFunction(key);

        for (auto& p : table[index]) {
            if (p.first == key) {
                p.second = value;
                return;
            }
        }
        table[index].push_back({key, value});
    }
    
    int get(int key) {
        int index = hashFunction(key);

        for (auto& p : table[index]) {
            if (p.first == key) return p.second;
        }
        return -1;
        
    }
    
    void remove(int key) {
        int index = hashFunction(key);
        table[index].remove_if([key](const pair<int, int>& p) {
            return p.first == key;
        });
        
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */